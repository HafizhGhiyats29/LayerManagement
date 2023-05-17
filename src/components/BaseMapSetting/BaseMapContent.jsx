import React from 'react';
import MapList from './MapList';
import BaseMapCategories from './BaseMapCategories';
import BaseMapSearch from './BaseMapSearch';

function BaseMapContent () {
    return (
        <section className="py-12 px-6 w-full">
            <h1 className="font-semibold text-3xl mb-10">Base Map Setting</h1>
            <article>
                <section className="after:contents-[''] after:block after:w-full after:h-[2px] after:bg-gray mb-10">
                    <MapList />
                </section>
                <section className="flex gap-6">
                    <BaseMapCategories />
                    <BaseMapSearch />
                </section>
            </article>

        </section>
    )
}

export default BaseMapContent;