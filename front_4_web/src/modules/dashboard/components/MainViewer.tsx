import GlobalStyles from "../../common/styles/GlobalStyles"
import { NavigationTop } from "../../common/components/Navigation/Top/NavigationTop"
import { NavigationBottom } from "../../common/components/Navigation/Bottom/NavigationBottom"
import { Map } from "../../details/components/Map"
export const MainViewer = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                <NavigationTop />
                <Map />
                <NavigationBottom />
            </div>
        </>
    )
}