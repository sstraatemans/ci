import * as types from "./../actionTypes";
import Cookie from 'js-cookie';

export function setLocale (locale, messages) {
  Cookie.set('locale', locale);
  return {
    type: types.SET_LOCALE,
    locale,
    messages
  };
}
