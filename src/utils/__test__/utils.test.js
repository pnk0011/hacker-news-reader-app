import { timeAgo } from "../utils";

describe("timeAgo function", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2023-07-04T12:00:00Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should return seconds ago", () => {
    const unixTimestamp = Math.floor(Date.now() / 1000) - 30;
    expect(timeAgo(unixTimestamp)).toBe("30 seconds ago");
  });

  it("should return minutes ago", () => {
    const unixTimestamp = Math.floor(Date.now() / 1000) - 120;
    expect(timeAgo(unixTimestamp)).toBe("2 minutes ago");
  });

  it("should return hours ago", () => {
    const unixTimestamp = Math.floor(Date.now() / 1000) - 7200;
    expect(timeAgo(unixTimestamp)).toBe("2 hours ago");
  });

  it("should return days ago", () => {
    const unixTimestamp = Math.floor(Date.now() / 1000) - 172800;
    expect(timeAgo(unixTimestamp)).toBe("2 days ago");
  });
});
