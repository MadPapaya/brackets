module.exports = function check(str, bracketsConfig) {
    let bracketsMap = bracketsConfig.map((c) => c.join(""));

    function recursion() {
        for (const brackets of bracketsMap) {
            if (str.length == 0) {
                return true
            }
            if (str.includes(brackets)) {
                str = str.replace(brackets, "");
                return recursion();
            }
        }
        return false;
    }
    return recursion();
}