import {
  UPDATE_DATE_CALENDAR
} from './types'

export const updateDate = ({ prop, value }) => {
  console.log({ prop, value })
  return {
    type: UPDATE_DATE_CALENDAR,
    payload: { prop, value }
  }
}
