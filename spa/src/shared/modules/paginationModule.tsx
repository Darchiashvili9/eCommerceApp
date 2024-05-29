import Pagination from 'react-bootstrap/Pagination';

function PaginationModule({ totalcount, pageNumber, pageSize, setShopParamsSelected, getProd }
    : { totalcount: number, pageNumber: number, pageSize: number, setShopParamsSelected: Function, getProd: Function }) {

    const getPaginationItems = () => {
        let active = pageNumber;
        let items = [];
        let page = totalcount / pageSize < 1 ? 1 : totalcount / pageSize;

        for (let number = 1; number <= page; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}
                    onClick={(event) => {
                        const element = event.target as HTMLInputElement
                        var numb: number = + element.innerText;
                        setShopParamsSelected((item: any) => ({ ...item, pageNumb: numb }));
                        getProd();
                    }}>
                    {number < 2 ? 1 : number}
                </Pagination.Item>
            );
        }
        return items;
    }

    return (
        <div>
            {totalcount > 0 ?
                <div className="d-flex justify-content-center">
                    <Pagination size="sm">
                        <Pagination.First key={0}
                            onClick={() => {
                                setShopParamsSelected((item: any) => ({
                                    ...item,
                                    pageNumb: 1
                                }));
                                getProd();
                            }}>
                        </Pagination.First>

                        <Pagination.Prev key={pageNumber > 1 ? pageNumber - 1 : 1}
                            onClick={() => {
                                setShopParamsSelected((item: any) => ({
                                    ...item,
                                    pageNumb: pageNumber > 1.99 ? pageNumber - 1 : 1
                                }));
                                getProd();
                            }}>
                        </Pagination.Prev>

                        {getPaginationItems()}

                        <Pagination.Next key={pageNumber < totalcount / pageSize ? pageNumber + 1 : totalcount / pageSize}
                            onClick={() => {
                                setShopParamsSelected((item: any) => ({
                                    ...item,
                                    pageNumb: pageNumber < totalcount / pageSize ? pageNumber + 1 : Math.round(totalcount / pageSize)
                                }));
                                getProd();
                            }}>
                        </Pagination.Next>

                        <Pagination.Last key={999}
                            onClick={() => {
                                setShopParamsSelected((item: any) => ({
                                    ...item,
                                    pageNumb: Math.round(totalcount / pageSize)
                                }));
                                getProd();
                            }}>
                        </Pagination.Last>
                    </Pagination>
                </div>
                :
                <div></div>
            }
        </div>
    );
}
export default PaginationModule;