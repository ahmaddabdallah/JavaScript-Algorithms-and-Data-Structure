/* From Software Engineering is called is Work On Google */

/*
    Profile Accounts:
        GitHub : https://github.com/akaritakai
        X.com : https://x.com/akaritakai
        Linked-In : https://www.linkedin.com/in/akaritakai/
        CodeWares : https://www.codewars.com/users/akaritakai
*/

function modulusProduct(a, b, n) {
  if (b == 0) return 0;
  if (b == 1) return a % n;
  return (modulusProduct(a, (b - (b % 10)) / 10, n) * 10 + (b % 10) * a) % n;
}

function modulusPower(a, b, n) {
  if (b == 0) return 1;
  if (b == 1) return a % n;
  if (b % 2 == 0) {
    var c = modulusPower(a, b / 2, n);
    return modulusProduct(c, c, n);
  }
  return modulusProduct(a, modulusPower(a, b - 1, n), n);
}

function isPrime(n) {
  /* LuT for items under 25 and items that would be killed fast via Eratosthenes method */
  if (n <= 1) return false;
  if (
    n == 2 ||
    n == 3 ||
    n == 5 ||
    n == 7 ||
    n == 11 ||
    n == 13 ||
    n == 17 ||
    n == 19 ||
    n == 23
  )
    return true;
  if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0) return false;

  /* Create Witness Array */
  for (
    var a = [2, 3, 5, 7, 11, 13, 17, 19], b = n - 1, d, t, i, x;
    b % 2 == 0;
    b = b / 2
  );
  /* Transform n - 1 => 2^x * d with some odd d by factoring powers of 2 from n - 1 */
  for (i = 0; i < a.length; i++) {
    x = modulusPower(a[i], b, n);
    if (x == 1 || x == n - 1) continue;
    for (t = true, d = b; t && d < n - 1; d = d * 2) {
      x = modulusProduct(x, x, n);
      if (x == n - 1) t = false;
    }
    if (t) return false; /* composite (non-prime) */
  }
  return true; /* probably prime */
}
