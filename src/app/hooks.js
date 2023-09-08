import { useDispatch, useSelector } from "react-redux";


// use throughout application instead of plain 'useDispatch' and 'useSelector'
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;