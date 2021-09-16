'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterPresets = exports.enterPresets = {
  elevator: {
    from: { transform: 'scale(0)', opacity: '0' },
    to: { transform: '', opacity: '' }
  },
  fade: {
    from: { opacity: '0' },
    to: { opacity: '' }
  },
  accordionVertical: {
    from: { transform: 'scaleY(0)', transformOrigin: 'center top' },
    to: { transform: '', transformOrigin: 'center top' }
  },
  accordionHorizontal: {
    from: { transform: 'scaleX(0)', transformOrigin: 'left center' },
    to: { transform: '', transformOrigin: 'left center' }
  },
  none: null
};
/**
 * React Flip Move | enterLeavePresets
 * (c) 2016-present Joshua Comeau
 *
 * This contains the master list of presets available for enter/leave animations,
 * along with the mapping between preset and styles.
 */
var leavePresets = exports.leavePresets = {
  elevator: {
    from: { transform: 'scale(1)', opacity: '1' },
    to: { transform: 'scale(0)', opacity: '0' }
  },
  fade: {
    from: { opacity: '1' },
    to: { opacity: '0' }
  },
  accordionVertical: {
    from: { transform: 'scaleY(1)', transformOrigin: 'center top' },
    to: { transform: 'scaleY(0)', transformOrigin: 'center top' }
  },
  accordionHorizontal: {
    from: { transform: 'scaleX(1)', transformOrigin: 'left center' },
    to: { transform: 'scaleX(0)', transformOrigin: 'left center' }
  },
  none: null
};

// For now, appearPresets will be identical to enterPresets.
// Assigning a custom export in case we ever want to add appear-specific ones.
var appearPresets = exports.appearPresets = enterPresets;

// Embarrassingly enough, v2.0 launched with typo'ed preset names.
// To avoid penning a new major version over something so inconsequential,
// we're supporting both spellings. In a future version, these alternatives
// may be deprecated.
// $FlowFixMe
enterPresets.accordianVertical = enterPresets.accordionVertical;
// $FlowFixMe
enterPresets.accordianHorizontal = enterPresets.accordionHorizontal;
// $FlowFixMe
leavePresets.accordianVertical = leavePresets.accordionVertical;
// $FlowFixMe
leavePresets.accordianHorizontal = leavePresets.accordionHorizontal;

var defaultPreset = exports.defaultPreset = 'elevator';
var disablePreset = exports.disablePreset = 'none';