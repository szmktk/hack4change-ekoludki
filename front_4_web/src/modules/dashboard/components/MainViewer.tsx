import GlobalStyles from "../../common/styles/GlobalStyles"
import { NavigationTop } from "../../common/components/Navigation/Top/NavigationTop"
import { NavigationBottom } from "../../common/components/Navigation/Bottom/NavigationBottom"
export const MainViewer = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                <NavigationTop />
                <NavigationBottom />
            </div>
        </>
    )
}