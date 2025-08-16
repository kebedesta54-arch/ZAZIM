export const track = (name, props = {}) => {
  try {
    window.__zazim = window.__zazim || [];
    window.__zazim.push({ name, ts: Date.now(), ...props });
  } catch (_) {}
};
