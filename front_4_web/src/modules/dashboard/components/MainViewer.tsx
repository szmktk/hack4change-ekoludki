import GlobalStyles from "../../common/styles/GlobalStyles"
import { NavigationTop } from "../../common/components/Navigation/Top/NavigationTop"
import { NavigationBottom } from "../../common/components/Navigation/Bottom/NavigationBottom"
// import { Map } from '../../details/components/Map'
import { Main } from '../../details/components/Main/Main'

export const MainViewer = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                <NavigationTop />
                {/* <Map
                    height={"50vh"}
                    markerX={0}
                    markerY={0}
                    centerX={0}
                    centerY={0}
                    zoom={1}
                /> */}
                <Main />
                <NavigationBottom />
            </div>
        </>
    )
}