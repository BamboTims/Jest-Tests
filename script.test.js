const { palindrome, fetchSWapiPeople } = require("./script");
const fetch = require("node-fetch");

const mockFetch = jest.fn().mockReturnValue(
	Promise.resolve({
		json: () =>
			Promise.resolve({
				count: 87,
				results: [0, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 9],
			}),
	})
);

describe("palindrom Checker", () => {
	test("check eye", () => {
		expect(palindrome("eye")).toBe(true);
	});
	test("check civic", () => {
		expect(palindrome("civic")).toBe(true);
	});
	test("check bad", () => {
		expect(palindrome("bad")).toBe(false);
	});
	test("check Kayak", () => {
		expect(palindrome("kayak")).toBe(true);
	});
	test("check RaceCar", () => {
		expect(palindrome("RaceCar")).toBe(true);
	});
	test("check Step On No pEts", () => {
		expect(palindrome("Step On No pEts")).toBe(true);
	});
	test("check UFO TOFU", () => {
		expect(palindrome("UFO TOFU")).toBe(true);
	});
});

describe("SWAPI Mock api test", () => {
	test("check data", async () => {
		const data = await fetchSWapiPeople(mockFetch);
		expect(data.count).toBe(87);
	});
	test("check results", async () => {
		const data = await fetchSWapiPeople(mockFetch);
		expect(data.results.length).toBeGreaterThan(4);
	});
	test("check url", async () => {
		expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
	});
});

describe("SWAPI Real api test", () => {
	test("check data", async () => {
		const data = await fetchSWapiPeople(fetch);
		expect(data.count).toBe(82);
	});
	test("check results", async () => {
		const data = await fetchSWapiPeople(fetch);
		expect(data.results.length).toBeGreaterThan(7);
	});
});
