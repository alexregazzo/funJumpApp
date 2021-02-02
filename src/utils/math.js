export function map(e, t, r, n, a) {
  return ((e - t) / (r - t)) * (a - n) + n;
}

export function lerp(e, t, r) {
  return r * (t - e) + e;
}
