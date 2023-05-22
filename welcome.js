import os from 'os'

const q = (user) => {
console.log(`Привет, ${user}. Вижу ты зашел с ${os.type()}`);
}

export default q