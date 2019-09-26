import { getLocalRoute } from '../../actions/apiRouting';

export function updateRoute(routeName, navigation, id, params) {
  let route = routeName;
  try {
    route = getLocalRoute(routeName);
    console.log('route:', route);
  } catch (err) {
    //console.log('routing error', err);
  }

  if (id === 0) {
    navigation.closeDrawer();
  }
  console.log('params:', params);
  navigation.navigate(route, params);
}

export function updateStaticRoute(routeName, navigation, params) {
  let route = routeName;
  console.log('route:', route);
  console.log('params:', params);
  navigation.navigate(route, params);
}
