import { getVillains } from "./database.js"

const villains = getVillains()

export const VillainList = () => {
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML += `<article class="villain"><li>${villain.name}</li></article>`
    }

    villainHTML += "</ul>"

    return villainHTML
}