import useAppContext from "./useAppContext";

const useKeyDistributor = () => {
    const { getContext : { lang } } = useAppContext();

    const isFa = lang === "fa";

    return (targetObject , targetPropertyName = "") => {
        if(isFa) {
            return targetObject?.[targetPropertyName.replace("En" , "")] || targetObject?.[targetPropertyName] || "";
        }else return targetObject?.[targetPropertyName] || "";
    }
}


export default useKeyDistributor;