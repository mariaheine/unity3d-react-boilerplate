using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MousePositionHandling
{
    interface IMousePositionObserver
    {
        void UpdateMousePosition(int mousePosX);
    }
}
