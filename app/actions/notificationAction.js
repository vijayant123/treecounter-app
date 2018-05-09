import { getAuthenticatedrequest } from '../utils/api';

import { debug } from '../debug/index';

export function NotificationAction() {
  debug('Getting Notifications');
  return getAuthenticatedrequest('notifications_get');
}
