
function PagingHeaderModule({ totalCount, pageNumber, pageSize }
    : { totalCount: number, pageNumber: number, pageSize: number }) {

    return (
        <header>
            {totalCount && totalCount > 0 ?
                <div>
                    <span >
                        Showing
                        <strong>
                            <br />
                            {(pageNumber - 1) * pageSize + 1} -
                            {pageNumber * pageSize > totalCount
                                ? totalCount
                                : pageNumber * pageSize}
                        </strong>
                    </span>
                    <span> of </span>
                    <span>
                        <strong>
                            {totalCount}
                        </strong>
                    </span>
                    <span> Results </span>
                </div>
                :
                <div>
                    <span>
                        There are <strong> 0 </strong> results for this.
                    </span>
                </div>
            }
        </header>
    );
}
export default PagingHeaderModule;