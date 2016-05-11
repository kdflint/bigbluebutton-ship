import { clearUsersCollection } from '/imports/startup/server/collectionManagers/users';
import { clearChatCollection } from '/imports/startup/server/collectionManagers/chat';
import { clearShapesCollection } from '/imports/startup/server/collectionManagers/shapes';
import { clearSlidesCollection } from '/imports/startup/server/collectionManagers/slides';
import { clearPresentationsCollection } from '/imports/startup/server/collectionManagers/presentations';
import { clearPollCollection } from '/imports/startup/server/collectionManagers/poll';
import { clearCursorCollection, initializeCursor } from '/imports/startup/server/collectionManagers/cursor';
import { Meetings } from '/collections/collections';
import { logger } from '/imports/startup/server/logger';

export function addMeetingToCollection(meetingId, name, intendedForRecording, voiceConf, duration, callback) {
  //check if the meeting is already in the collection

  Meetings.upsert({
    meetingId: meetingId,
  }, {
    $set: {
      meetingName: name,
      intendedForRecording: intendedForRecording,
      currentlyBeingRecorded: false,
      voiceConf: voiceConf,
      duration: duration,
      roomLockSettings: {
        // by default the lock settings will be disabled on meeting create
        disablePrivateChat: false,
        disableCam: false,
        disableMic: false,
        lockOnJoin: Meteor.config.lockOnJoin,
        lockedLayout: false,
        disablePublicChat: false,
        lockOnJoinConfigurable: false // TODO
      },
    },
  }, (_this => {
    return function (err, numChanged) {
      let funct;
      if (numChanged.insertedId != null) {
        funct = function (cbk) {
          logger.info(`__added MEETING ${meetingId}`);
          return cbk();
        };

        return funct(callback);
      } else {
        logger.error('nothing happened');
        return callback();
      }
    };
  })(this));

  // initialize the cursor in the meeting
  return initializeCursor(meetingId);
};

export function clearMeetingsCollection() {
  const meetingId = arguments[0];
  if (meetingId != null) {
    return Meetings.remove({
      meetingId: meetingId,
    }, logger.info(`cleared Meetings Collection (meetingId: ${meetingId}!`));
  } else {
    return Meetings.remove({}, logger.info('cleared Meetings Collection (all meetings)!'));
  }
};

//clean up upon a meeting's end
export function removeMeetingFromCollection(meetingId, callback) {
  let funct;
  if (Meetings.findOne({
    meetingId: meetingId,
  }) != null) {
    logger.info(`end of meeting ${meetingId}. Clear the meeting data from all collections`);

    // delete all users in the meeting
    clearUsersCollection(meetingId);

    // delete all slides in the meeting
    clearSlidesCollection(meetingId);

    // delete all shapes in the meeting
    clearShapesCollection(meetingId);

    // delete all presentations in the meeting
    clearPresentationsCollection(meetingId);

    // delete all chat messages in the meeting
    clearChatCollection(meetingId);

    // delete the meeting
    clearMeetingsCollection(meetingId);

    // delete the cursor for the meeting
    clearCursorCollection(meetingId);

    //delete the polls for the meeting
    clearPollCollection(meetingId);
    return callback();
  } else {
    funct = function (localCallback) {
      logger.error(`Error! There was no such meeting ${meetingId}`);
      return localCallback();
    };

    return funct(callback);
  }
};
