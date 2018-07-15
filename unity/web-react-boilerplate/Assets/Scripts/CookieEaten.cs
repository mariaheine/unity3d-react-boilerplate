using UnityEngine;
using System.Runtime.InteropServices;

public class CookieEaten : MonoBehaviour {

    [DllImport("ReactEvents")]
    private static extern void CookieEatenEvent();

    void OnTriggerEnter(Collider col)
    {
        CookieEatenEvent();
        Destroy(gameObject);
    }
}
