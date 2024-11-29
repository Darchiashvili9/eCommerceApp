import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ServerErrorComponenet() {

    const location = useLocation();
    const [error, setError] = useState<{ details: string, statusCode: string, errorMessage: string[] }>();

    useEffect(() => {
        (async function () {
            try {
                await getNavigateOptions();
            }
            catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const getNavigateOptions = async function () {
        await setError(location?.state?.error)


        console.log(error);
    }

    return (
        <div className="container mt-5">
            <h4>Interval Server Error - refreshing the page will make the exception disappear</h4>

            {error ?
                <div>
                    <h5 className="text-danger">Error: {error?.errorMessage}</h5>
                    <p>React is not responsible for this error</p>
                    <code className="mt-5" style={{ backgroundColor: "whitesmoke" }}>{error?.details}</code>
                </div>
                :
                <div></div>
            }
        </div>
    )
}
export default ServerErrorComponenet;