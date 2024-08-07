export function calculate(eq) {
  const opr = ["^", "/", "*", "+", "-"];
  function parseBasic(eq) {
    let nums = [];
    let ops = [];
    let num = "";
    let i = 0;

    while (i < eq.length) {
      let neg = false;
      if (i === 0 && eq[i] === "-") {
        neg = true;
        i++;
        if (eq[i] === "-") {
          neg = !neg;
          i++;
        } else if (eq[i] === "+") {
          i++;
        }
      } else if (i === 0 && eq[i] === "+") {
        i++;
        if (eq[i] === "-") {
          neg = !neg;
          i++;
        } else if (eq[i] === "+") {
          i++;
        }
      }
      if (opr.includes(eq[i])) {
        ops.push(eq[i]);
        i++;
        if (eq[i] === "-") {
          neg = true;
          i++;
        }
        if (eq[i] === "+") {
          i++;
        }
      }
      while (i < eq.length && (/\d/.test(eq[i]) || eq[i] === ".")) {
        num += eq[i];
        i++;
      }
      nums.push((neg ? -1 : 1) * parseFloat(num));
      num = "";
    }
    return [nums, ops];
    console.log(nums, ops);
  }

  function calcBasic(input) {
    let [nums, ops] = input; // separate nums and ops

    for (let o of opr) {
      // iterate through operators in order of operations
      while (ops.includes(o)) {
        // while the operator is present in ops list
        let loc = ops.indexOf(o); // find where the operator is present
        if (o === "^") {
          // perform calculation based on operator
          nums[loc] = Math.pow(nums[loc], nums.splice(loc + 1, 1)[0]);
        } else if (o === "/") {
          nums[loc] = nums[loc] / nums.splice(loc + 1, 1)[0];
        } else if (o === "*") {
          nums[loc] = nums[loc] * nums.splice(loc + 1, 1)[0];
        } else if (o === "+") {
          try {
            nums[loc] = nums[loc] + nums.splice(loc + 1, 1)[0];
          } catch (error) {
            nums[loc] = 1 * nums[loc];
          }
        } else if (o === "-") {
          try {
            nums[loc] = nums[loc] - nums.splice(loc + 1, 1)[0];
          } catch (error) {
            nums[loc] = -nums[loc];
          }
        }
        ops.splice(loc, 1); // remove the operator from ops
      }
    }

    return String(nums[0]); // convert result to string
  }

  function infix(eq) {
    eq = eq.replace(/\s/g, ""); // remove whitespace from equation
    let s = 0; // initialize start index
    let e = 0; // initialize end index

    while (eq.includes("(")) {
      // while there are brackets in equation
      s = eq.lastIndexOf("("); // find the last '(' bracket in equation
      e = eq.indexOf(")", s); // find the first ')' bracket in equation after s

      // perform the calculation on the basic equation
      // which is sliced based on start and end indices
      // now replace the whole sub-bracket equation with the result obtained
      eq =
        eq.slice(0, s) +
        calcBasic(parseBasic(eq.slice(s + 1, e))) +
        eq.slice(e + 1);
    }

    // final calculation for the equation remaining without brackets
    return calcBasic(parseBasic(eq));
  }
  function check(input) {
    const allowedChars = "0123456789().+-*/^ ";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (allowedChars.indexOf(char) === -1) {
        return "Enter a valid expression"; // If any character is not allowed, return false
      }
    }
    return infix(input); // If all characters are allowed, return true
  }
  return check(eq);
}
