import React from "react"
import styles from "./AlertBar.module.css"

export default function AlertBar(props) {
  let state = ".inactive"
  if (props.warning == "") {
    state = styles.inactive
  } else {
    state = styles.AlertBar
  }

  return (
    <div className="pt-40">
      <div className={props.warning !== "" ? "bg-red-50 p-4 " : "hidden"}>
        <div className="flex justify-center ">
          <div className="flex-shrink-0">
          <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
          
          </div>
          <div className="ml-3  ">
            <h3 className="text-sm font-medium text-red-800 text-left ml-6 ">Errores en tu busqueda!</h3>
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="list-disc pl-5 space-y-1 ">
                <li className="text-center">{props.warning}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
