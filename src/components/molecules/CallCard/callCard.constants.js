import styles from './callCard.module.scss';

export const CALL_TYPES_KEYS = {
  ANSWERED: 'answered',
  VOICEMAIL: 'voicemail',
  MISSED: 'missed'
};

export const CALL_DIRECTION_TYPES = {
  OUTBOUND: 'outbound',
  INBOUND: 'inbound'
};

export const CALL_TYPES_LABELS = {
  [CALL_TYPES_KEYS.ANSWERED]: 'Answered',
  [CALL_TYPES_KEYS.VOICEMAIL]: 'Voicemail',
  [CALL_TYPES_KEYS.MISSED]: 'Missed'
};

export const CALL_TYPES_LABELS_STYLES = {
  [CALL_TYPES_KEYS.ANSWERED]: styles.answered,
  [CALL_TYPES_KEYS.VOICEMAIL]: styles.voicemail,
  [CALL_TYPES_KEYS.MISSED]: styles.missed
};

export const CALL_TYPES_BORDER_STYLES = {
  [CALL_TYPES_KEYS.ANSWERED]: styles.answeredBorder,
  [CALL_TYPES_KEYS.VOICEMAIL]: styles.voicemailBorder,
  [CALL_TYPES_KEYS.MISSED]: styles.missedBorder
};

export const CALL_BOUNDING_TYPE_IMAGES = {
  [CALL_DIRECTION_TYPES.OUTBOUND]:
    'https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/outgoing-call-icon.png',
  [CALL_DIRECTION_TYPES.INBOUND]:
    'https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/incoming-call-icon.png'
};
