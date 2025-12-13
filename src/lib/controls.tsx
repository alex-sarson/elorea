export type FocusableRefs = Array<HTMLButtonElement | null>;

export function moveFocus(
  e: React.KeyboardEvent<HTMLButtonElement>,
  idx: number,
  refs: FocusableRefs,
  setFocusState: (idx: number) => void
) {
  const last = refs.length - 1;
  if (last < 0) return;

  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    e.preventDefault();
    const next = idx === last ? 0 : idx + 1;
    setFocusState(next);
    refs[next]?.focus();
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    e.preventDefault();
    const prev = idx === 0 ? last : idx - 1;
    setFocusState(prev);
    refs[prev]?.focus();
  }
}
