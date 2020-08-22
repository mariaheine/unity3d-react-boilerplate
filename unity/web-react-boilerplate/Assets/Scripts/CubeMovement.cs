using UnityEngine;

public class CubeMovement : MonoBehaviour
{
    [SerializeField] float Speed = 3.0f;

    void Update()
    {
        // -------------
        
        if (Input.GetKey(KeyCode.W))
            transform.position += new Vector3(0.0f, 0.0f, Speed * Time.deltaTime);
        else if (Input.GetKey(KeyCode.D))
            transform.position += new Vector3(Speed * Time.deltaTime, 0.0f, 0.0f);
        else if (Input.GetKey(KeyCode.S))
            transform.position += new Vector3(0.0f, 0.0f, -Speed * Time.deltaTime);
        else if (Input.GetKey(KeyCode.A))
            transform.position += new Vector3(-Speed * Time.deltaTime, 0.0f, 0.0f);
        
        // -------------
    }
}
