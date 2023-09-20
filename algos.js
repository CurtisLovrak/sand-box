function twoSum(nums, target) {

	const searchObj = {};
	for (let i = 0; i < nums.length; i++) {
		if (searchObj.hasOwnProperty([nums[i]])) {
			return [i, searchObj[nums[i]]];
		}
		searchObj[target - nums[i]] = i;
	}
	return [];
};

// console.log(twoSum([2,7,11,15], 9))

function threeSum(nums, target) {
	const searchObj = {};
	for (let i = 0; i < nums.length; i++) {
		
	}
}

const lengthOfLongestSubstring = function(s) {
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
	//Use a sliding window method.
	// use a set, 2 pointers?
	const map = new Map();

}

function longestPalindromeSubstringLength(s) {
	if (s.length === 0) {
	  return 0;
	}
  
	let maxLength = 1; // At least, a single character is a palindrome
	for (let i = 0; i < s.length; i++) {
	  // Expand around the current character for odd-length palindromes
	  let left = i;
	  let right = i;
	  while (left >= 0 && right < s.length && s[left] === s[right]) {
		const currentLength = right - left + 1;
		if (currentLength > maxLength) {
		  maxLength = currentLength;
		}
		left--;
		right++;
	  }
	  left = i;
	  right = i + 1;
	  while (left >= 0 && right < s.length && s[left] === s[right]) {
		const currentLength = right - left + 1;
		if (currentLength > maxLength) {
		  maxLength = currentLength;
		}
		left--;
		right++;
	  }
	}
  
	return maxLength;
  }

//   console.log(longestPalindromeSubstringLength("badad"))
  
  // Example usage:
  const inputString = "babad";
  const lengthOfLongestPalindrome = longestPalindromeSubstringLength(inputString);
//   console.log(lengthOfLongestPalindrome); // Output: 3 (the longest palindrome is "aba")
  

// const test = "test";

// console.log(test)

const balancedParens = (s) => {

	const dictionary = {
		"}" : "{",
		"]" : "[",
		")" : "("
	}

	const stack = [];

	const arrOfString = [...s]

	while (arrOfString.length) {

		const currChar = arrOfString.pop()

		if (dictionary[currChar]) {
			stack.push(currChar);
			console.log(stack, currChar);
		}
		if (dictionary[stack[stack.length - 1]] === currChar) {
			console.log(stack, currChar)
			stack.pop();
			
		}
	}
	return stack.length === 0;
}

console.log(balancedParens('{[{[()}]}'))