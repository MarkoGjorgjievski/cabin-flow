const badgeColor = new Map([
  ['blue', 'bg-blue-700 text-blue-200'],
  ['orange', 'bg-orange-700 text-orange-200'],
  ['red', 'bg-red-700 text-red-200'],
  ['green', 'bg-green-700 text-green-200'],
  ['yellow', 'bg-yellow-700 text-yellow-200'],
  ['amber', 'bg-amber-700 text-amber-200'],
  ['purple', 'bg-purple-700 text-purple-200'],
  ['violet', 'bg-violet-700 text-violet-200'],
  ['pink', 'bg-pink-700 text-pink-200'],
  ['rose', 'bg-rose-700 text-rose-200'],
  ['slate', 'bg-slate-700 text-slate-200'],
  ['sky', 'bg-sky-700 text-sky-200'],
  ['cyan', 'bg-cyan-700 text-cyan-200'],
  ['indigo', 'bg-indigo-700 text-indigo-200'],
  ['teal', 'bg-teal-700 text-teal-200'],
  ['lime', 'bg-lime-700 text-lime-200'],
  ['emerald', 'bg-emerald-700 text-emerald-200'],
  ['stone', 'bg-stone-700 text-stone-200'],
  ['white', 'bg-gray-700 text-gray-200'],
]);

const badgeTextColor = new Map([
  ['blue', 'text-blue-700'],
  ['orange', 'text-orange-700'],
  ['red', 'text-red-700'],
  ['green', 'text-green-700'],
  ['yellow', 'text-yellow-700'],
  ['amber', 'text-amber-700'],
  ['purple', 'text-purple-700'],
  ['violet', 'text-violet-700'],
  ['pink', 'text-pink-700'],
  ['rose', 'text-rose-700'],
  ['slate', 'text-slate-700'],
  ['sky', 'text-sky-700'],
  ['cyan', 'text-cyan-700'],
  ['indigo', 'text-indigo-700'],
  ['teal', 'text-teal-700'],
  ['lime', 'text-lime-700'],
  ['emerald', 'text-emerald-700'],
  ['stone', 'text-stone-400'],
  ['white', 'text-gray-400'],
]);

const badgeBorderColor = new Map([
  ['blue', 'border-blue-300'],
  ['orange', 'border-orange-300'],
  ['red', 'border-red-300'],
  ['green', 'border-green-300'],
  ['yellow', 'border-yellow-300'],
  ['amber', 'border-amber-300'],
  ['purple', 'border-purple-300'],
  ['violet', 'border-violet-300'],
  ['pink', 'border-pink-300'],
  ['rose', 'border-rose-300'],
  ['slate', 'border-slate-300'],
  ['sky', 'border-sky-300'],
  ['cyan', 'border-cyan-300'],
  ['indigo', 'border-indigo-300'],
  ['teal', 'border-teal-300'],
  ['lime', 'border-lime-300'],
  ['emerald', 'border-emerald-300'],
  ['stone', 'border-stone-300'],
  ['white', 'border-gray-300'],
]);

const badgeSize = new Map([
  ['small', 'badge-sm'],
  ['medium', 'badge-md'],
  ['large', 'badge-lg'],
  ['extra-large', 'px-2.5 py-3.5 text-xl'],
]);

const badgeMaxWidth = new Map([
  ['small', 'max-w-[60px]'],
  ['medium', 'max-w-[80px]'],
  ['large', 'max-w-[110px]'],
])

const badgeState = new Map([
  ['primary', 'badge-primary'],
  ['secondary', 'badge-secondary'],
  ['accent', 'badge-accent'],
  ['neutral', 'badge-neutral'],
  ['info', 'badge-info'],
  ['success', 'badge-success'],
  ['warning', 'badge-warning'],
  ['error', 'badge-error'],
  ['ghost', 'badge-ghost'],
]);

export { badgeState, badgeMaxWidth, badgeSize, badgeBorderColor, badgeTextColor, badgeColor }
