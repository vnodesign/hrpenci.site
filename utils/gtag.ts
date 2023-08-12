/**
 * The `gtagTrack` function is a TypeScript function that sends tracking data to Google Analytics using the `gtag`
 * function.
 * @param {string} eventCategory - The event category is a string that represents the category or type of the event being
 * tracked. It helps to classify the event and group similar events together. Examples of event categories could be "Button
 * Click", "Form Submission", or "Page View".
 * @param {string} eventAction - The `eventAction` parameter represents the action that the user has taken. It could be a
 * click, a form submission, or any other user interaction that you want to track.
 * @param {string} eventLabel - The `eventLabel` parameter is a string that represents a label or description for the event
 * being tracked. It provides additional information about the event that can be useful for analysis or reporting purposes.
 * @param data - The `data` parameter is an object that contains additional data that you want to send along with the
 * event. It can include any key-value pairs that you want to include in the event payload.
 * @returns The function `gtagTrack` returns `void`, which means it does not return any value.
 */

const gtagTrack = (
  eventCategory: string,
  eventAction: string,
  eventLabel: string,
  data?: Record<string, any>
): void => {
  if (typeof window === 'undefined') return
  if (!('gtag' in window)) return
  ;(window as any).gtag('event', eventAction, {
    event_category: eventCategory,
    event_label: eventLabel,
    ...data
  })
}

export default gtagTrack
