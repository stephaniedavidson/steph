import React from "react"
import { Link } from "gatsby"
import filterStyles from "./filter.module.scss"

const Filter = () => {
  return (
    <div className={filterStyles.filter}>
      <ul>
        <li>
          <Link activeClassName={filterStyles.active} to="/design">
            Design + development
          </Link>
        </li>
        <li>
          <Link activeClassName={filterStyles.active} to="/motion">
            Motion
          </Link>
        </li>
        <li>
          <Link activeClassName={filterStyles.active} to="/illustration">
            Illustration
          </Link>
        </li>
        <li>
          <Link activeClassName={filterStyles.active} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://bloombergcyber.tumblr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art direction{" "}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlGODhCRTUzRUVBMTFFQTkzRkJBODY2RjFFRjhGQTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlGODhCRTYzRUVBMTFFQTkzRkJBODY2RjFFRjhGQTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUY4OEJFMzNFRUExMUVBOTNGQkE4NjZGMUVGOEZBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUY4OEJFNDNFRUExMUVBOTNGQkE4NjZGMUVGOEZBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtwTymMAAACaSURBVHjaYmAgDAKA+D82zMRAAWAB4g0E1EwCYkYgFgXifUCsgyz5nwBOgGq8DOXfgcmxIBmSiMPma0g23gViByB+jG4zNoBuowy6HlyacWlkgHolAZdmbBpDgPgBEPfAFDHhsBHdj0+AmAeI5YFYBJ9mMSCWQNOIM57RwVUgdgTiD/g04tIMAleISWEUJ0/k+CYJUGQzQIABAAtNNyWVY2jAAAAAAElFTkSuQmCC
            "
              alt="new window"
            />
          </a>
        </li>
        <li>
          <a
            href="http://steph.supply"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store{" "}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlGODhCRTUzRUVBMTFFQTkzRkJBODY2RjFFRjhGQTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlGODhCRTYzRUVBMTFFQTkzRkJBODY2RjFFRjhGQTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUY4OEJFMzNFRUExMUVBOTNGQkE4NjZGMUVGOEZBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUY4OEJFNDNFRUExMUVBOTNGQkE4NjZGMUVGOEZBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtwTymMAAACaSURBVHjaYmAgDAKA+D82zMRAAWAB4g0E1EwCYkYgFgXifUCsgyz5nwBOgGq8DOXfgcmxIBmSiMPma0g23gViByB+jG4zNoBuowy6HlyacWlkgHolAZdmbBpDgPgBEPfAFDHhsBHdj0+AmAeI5YFYBJ9mMSCWQNOIM57RwVUgdgTiD/g04tIMAleISWEUJ0/k+CYJUGQzQIABAAtNNyWVY2jAAAAAAElFTkSuQmCC
            "
              alt="new window"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Filter
