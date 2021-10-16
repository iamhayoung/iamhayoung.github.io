export function formatReadingTime(minutes) {
  let thunder = Math.round(minutes / 5);

  if (thunder > 5) {
    return `${new Array(Math.round(thunder / Math.E))
      .fill("🔥")
      .join("")} ${minutes} min read`;
  } else {
    return `${new Array(thunder || 1)
      .fill("⚡️")
      .join("")} ${minutes} min read`;
  }
}
