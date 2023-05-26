import React from "react";
import BaseMapCategories from "./LayerCategories";
import BaseMapSearch from "./LayerSearch";
import BaseMapTable from "./LayerTable";

function LayerListContent({ searchKeywordValue, onSearchKeywordValueChange }) {
  return (
    <div>
      <section className="flex gap-6 mt-10">
        <BaseMapCategories />
        <BaseMapSearch searchKeywordValue={searchKeywordValue} onSearchKeywordValueChange={onSearchKeywordValueChange} />
      </section>
      <section>
        <BaseMapTable />
      </section>
    </div>
  );
}

export default LayerListContent;
