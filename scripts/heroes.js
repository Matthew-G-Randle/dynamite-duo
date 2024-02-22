import { getHeroes } from "./database.js"

const heroes = getHeroes()

export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of heroes) {
        heroHTML += `<article class="hero"><li>${hero.name}</li></article>`
    }

    heroHTML += "</ul>"

    return heroHTML
}

