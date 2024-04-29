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

    return calcBasic(parseBasic(eq));
  }
  