 function regexMatch(input, expression, flags = "g") {
   let regex =
     expression instanceof RegExp ? expression : new RegExp(expression, flags);
   let matches = input.matchAll(regex);
   matches = [...matches];
   return matches.map((item) => {
     return {
       match: item[0],
       matchAtIndex: item.index,
       capturedGroups: item.length > 1 ? item.slice(1) : undefined,
     };
   });
 }

export default function processRegex(e) {
  
  try {
    let regexPattern = document.getElementById("regexPattern");
    let regexInput = document.getElementById("regexInput");
    let regexOutput = document.getElementById("regexOutput");

    let flags = "";
    [...document.querySelectorAll("[type='checkbox']")].map((r) => {
      if (r.checked) flags += r.nextSibling.nodeValue[0];
    });
    const regex = new RegExp(regexPattern.value, flags);
    let matches = regexMatch(regexInput.value, regex);
    regexOutput.value =
      `Flags: ${flags}\r\n` +
      JSON.stringify(matches)
        .replace(/(?<sep>["}],)/g, "$1\r\n")
        .replace(/]},/g, "]},\r\n");
    } catch (e) {
      regexOutput.value = `Error Regex ${e}`;
  }
  
 }