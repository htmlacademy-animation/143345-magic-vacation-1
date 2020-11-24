export default () => {
  const rulesSection = document.querySelector(`.screen--rules`);
  const lastItemRules = document.querySelector(`.rules__item:last-child`);
  const linkRules = document.querySelector(`.rules__link`);
  const handleAnimationEndItemRules = () => linkRules.classList.add(`rules__link--active`);
  const observerConfig = {attributeFilter: [`class`]};
  const mutationCallback = (mutations) => {
    mutations.forEach((mut) => {
      if (mut.target.classList.contains(`active`)) {
        lastItemRules.addEventListener(`animationend`, handleAnimationEndItemRules);
      } else {
        lastItemRules.removeEventListener(`animationend`, handleAnimationEndItemRules);
        linkRules.classList.remove(`rules__link--active`);
      }
    });
  };
  const observer = new MutationObserver(mutationCallback);
  observer.observe(rulesSection, observerConfig);
};
