/* eslint-disable linebreak-style */
import eventBus from '@/eventBus';

export default function gotoPage(pageName, pageParams) {
  eventBus.$emit('gotoPage', pageName, pageParams);
  // eslint-disable-next-line eol-last
}
