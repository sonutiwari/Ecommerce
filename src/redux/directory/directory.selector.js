import { createSelector } from "reselect";

const directoryStateSelect = (state) => state.directory;

const directorySelector = createSelector(
  [directoryStateSelect],
  (directory) => directory.sections
);

export default directorySelector;
