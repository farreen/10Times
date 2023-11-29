import { HomePageRouter } from "../modules/addEvent/router"
import { ListPageRouter } from "../modules/listEvent/router"
export const IndexRouter = [
    ...HomePageRouter,
    ...ListPageRouter
]
