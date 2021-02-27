import React from 'react';
import {
    useListContext,
    TopToolbar,
    CreateButton,
    ExportButton,
    sanitizeListRestProps,
  } from 'react-admin';

//solution for removing reset button from action bar (doesnt have functionality there)
//translate text into german 
export const CustomListActions = (props) => {
    const { className, exporter, filters, maxResults, ...rest } = props;
    const {
      currentSort,
      resource,
      filterValues,
      basePath,
      total,
    } = useListContext();
    return (
      <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
        <CreateButton basePath={basePath} label="Erstellen" />
        <ExportButton
          disabled={total === 0}
          resource={resource}
          sort={currentSort}
          filterValues={filterValues}
          maxResults={maxResults}
          label="Daten exportieren"
        />
      </TopToolbar>
    );
  };