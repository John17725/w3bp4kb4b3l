import { getUsers } from './users'

export const printUsers = async () => {
  const users = getUsers()
  const element = document.createElement('div')
  element.innerHTML = `<h2>Current users</h2> ${users
    .map((user) => `<div>${user.name}</div>`)
    .join('')}`

  return element
}

printUsers().then((element) => document.body.appendChild(element))
