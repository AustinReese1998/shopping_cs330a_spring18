"use strict"
var cbId = 0

class View extends Subject{
	constructor(){
		super()
	}

	replaceTable(){
		cbId = 0
		let listArray = list.getShoppingList()
		let myTable = document.querySelector("#nextItem")
		myTable.innerHTML = ""
		for (let i = 0; i < listArray.length; i++){
			cbId = cbId + 1


			let tr = document.createElement("tr")
			tr.setAttribute("id", "row" + cbId)

			let itemCol = document.createElement("td")
			let quanCol = document.createElement("td")
			let prioCol = document.createElement("td")
			let storCol = document.createElement("td")
			let cateCol = document.createElement("td")
			let pricCol = document.createElement("td")

			let itemName = listArray[i].getItem()
			let quanName = listArray[i].getQuan()
			let prioName = listArray[i].getPrio()
			let storName = listArray[i].getStor()
			let cateName = listArray[i].getCate()
			let pricName = listArray[i].getPric()

			itemCol.innerHTML = itemName
			quanCol.innerHTML = quanName
			prioCol.innerHTML = prioName
			storCol.innerHTML = storName
			cateCol.innerHTML = cateName
			pricCol.innerHTML = pricName
			
			let box = document.createElement("input")
			box.type = "checkbox"
			box.classList.add("form-control")
			box.setAttribute("id", "box" + cbId)
			box.onchange = boxClick

			tr.appendChild(box)
			tr.appendChild(itemCol)
			tr.appendChild(quanCol)
			tr.appendChild(prioCol)
			tr.appendChild(storCol)
			tr.appendChild(cateCol)
			tr.appendChild(pricCol)

			myTable.appendChild(tr)

		}
	}
}