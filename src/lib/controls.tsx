export type FocusableRefs = Array<HTMLButtonElement | null>;

export function moveFocus(
  e: React.KeyboardEvent<HTMLButtonElement>,
  idx: number,
  refs: FocusableRefs
) {
  const last = refs.length - 1;
  if (last < 0) return;

  const focusAt = (i: number) => refs[i]?.focus();

  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    e.preventDefault();
    const next = idx === last ? 0 : idx + 1;
    focusAt(next);
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    e.preventDefault();
    const prev = idx === 0 ? last : idx - 1;
    focusAt(prev);
  }
}
