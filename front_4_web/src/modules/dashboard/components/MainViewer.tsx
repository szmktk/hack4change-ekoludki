import GlobalStyles from "../../common/styles/GlobalStyles"
import { NavigationTop } from "./NavigationTop"
import { NavigationBottom } from "./NavigationBottom"
import { Content } from "./Content"
export const MainViewer = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                <NavigationTop />
                    <Content/>
                <NavigationBottom />
            </div>
        </>
    )
}