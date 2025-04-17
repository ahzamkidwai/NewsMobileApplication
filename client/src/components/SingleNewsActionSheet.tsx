import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetItem,
} from '@/components/ui/actionsheet';

const SingleNewsActionSheet = ({
  openSingleNewsActionSheet,
  setOpenSingleNewsActionSheet,
}) => {
  return (
    <Actionsheet
      isOpen={openSingleNewsActionSheet}
      onClose={() => setOpenSingleNewsActionSheet(false)}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetItem onPress={() => setOpenSingleNewsActionSheet(false)}>
          Share
        </ActionsheetItem>
        <ActionsheetItem onPress={() => setOpenSingleNewsActionSheet(false)}>
          Bookmark
        </ActionsheetItem>
        <ActionsheetItem onPress={() => setOpenSingleNewsActionSheet(false)}>
          Cancel
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default SingleNewsActionSheet;

const styles = StyleSheet.create({});
