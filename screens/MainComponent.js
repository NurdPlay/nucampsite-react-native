import { useState } from "react";
import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [campsite, setCampsites] = useState(CAMPSITES);

    return <DirectoryScreen campsite={campsites} />
}

export default Main;