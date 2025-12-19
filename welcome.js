var name = "Developer";
function welcomeOld(user) {
  return "Hello " + user + ", your shift starts now.";
}

// Converted examples
const welcome = (user) => {
  return `Hello ${user}, your shift starts now.`;
}
const welcomeShort = user => `Hello ${user}, your shift starts now.`;

// --- Implementations requested ---

const isEven = n => n % 2 === 0;

const calcTax = price => {
  const total = price * 1.18;
  return `Price with tax: ${Number.isFinite(total) ? total.toFixed(2) : total}`;
};

const makeUrl = domain => {
  const clean = String(domain)
    .replace(/^https?:\/\/(www\.)?/, '')
    .replace(/\/.*$/, '')
    .replace(/^www\./, '');
  return `https://www.${clean}.com`;
};

const checkLogin = user => (user == null ? 'Please Log In' : `Welcome, ${user.name}`);

module.exports = {
  isEven,
  calcTax,
  makeUrl,
  checkLogin,
};