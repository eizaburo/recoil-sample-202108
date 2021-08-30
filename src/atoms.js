import { atom } from "recoil";
import { recoilPersist } from "recoil-persist"; //追加

//標準でrecoil-persistというkey名でwebstorageに保存される（オプションで指定可能）
const { persistAtom } = recoilPersist();

export const countState = atom({
    key: "count",
    default: 0
});

export const userState = atom({
    key: "user",
    default: {
        name: "hoge",
        age: 11
    },
    effects_UNSTABLE: [persistAtom] //userStateにだけこの記述を追加
});